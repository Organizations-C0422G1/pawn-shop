import {Component, Inject, OnInit} from '@angular/core';
import {UpdateContractService} from './update-contract.service';
import {Contract} from '../../../../model/contract/contract';
import {ActivatedRoute, Router} from '@angular/router';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {AngularFireStorage} from '@angular/fire/storage';
import {finalize} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';
import {formatDate} from '@angular/common';
import {PawnType} from '../../../../model/pawn/pawn-type';
import {PawnItem} from '../../../../model/pawn/pawn-item';
import {Customer} from '../../../../model/customer/customer';

@Component({
  selector: 'app-update-contract',
  templateUrl: './update-contract.component.html',
  styleUrls: ['./update-contract.component.css']
})
export class UpdateContractComponent implements OnInit {
  contractForm: FormGroup;
  pawnTypeList: PawnType[];
  pawnItemList: PawnItem[];
  customerList: Customer[];
  selectedImage: File = null;
  checkImgSize = false;
  regexImageUrl = false;
  editImageState = false;
  checkImg: boolean;
  url: any;
  msg = '';
  buttonBook = true;
  private abstractControl: any;
  constructor(private updateService: UpdateContractService,
              private activatedRoute: ActivatedRoute,
              private storage: AngularFireStorage,
              private router: Router,
              private toast: ToastrService) { }

  ngOnInit(): void {
    this.contractForm = new FormGroup({
      id: new FormControl(''),
      code: new FormControl(''),
      customer: new FormControl(''),
      pawnItem: new FormGroup({
        id: new FormControl(''),
        name: new FormControl('', [Validators.required]),
        status: new FormControl(''),
        pawnType: new FormControl(''),
      }),
      itemPrice: new FormControl('', [Validators.required, Validators.min(0)]),
      interestRate: new FormControl('', [Validators.required, Validators.min(0.2), Validators.max(0.4)]),
      startDate: new FormControl(''),
      endDate: new FormControl('', [Validators.required]),
      returnDate: new FormControl(''),
      liquidationPrice: new FormControl(''),
      employee: new FormControl(''),
      type: new FormControl(''),
      status: new FormControl('')
    }, this.checkDateEnd);

    const id = this.activatedRoute.snapshot.params.id;
    console.log(id);

    this.updateService.findById(Number(id)).subscribe(
      value => {
        this.contractForm.patchValue(value);
      }
    );
    this.updateService.getCustomer().subscribe(
      value => {
        this.customerList = value;
      }
    );
    this.updateService.getPawnType().subscribe(
      value => {
        this.pawnTypeList = value;
      }
    );
  }
  // submit() {
  //   const nameImg = this.getCurrentDateTime() + this.selectedImage.name;
  //   const filePath = `contract/${nameImg}`;
  //   const fileRef = this.storage.ref(filePath);
  //   this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
  //     finalize(() => {
  //       this.buttonBook = false;
  //       fileRef.getDownloadURL().subscribe((url) => {
  //         this.contractForm.patchValue({image: url});
  //         this.updateService.updateContract(this.bookId, this.contractForm.value).subscribe(
  //           () => {
  //             this.router.navigateByUrl('');
  //             this.toast.success('Chỉnh sửa hợp đồng thành công', 'Thông báo', {
  //               messageClass: 'center',
  //               positionClass: 'toast-top-center'
  //             });
  //           },
  //           error => {
  //             this.toast.error('Thêm sách thất bại', 'Thông báo', {
  //               messageClass: 'center',
  //               positionClass: 'toast-top-center'
  //             });
  //           }
  //         );
  //       });
  //     })
  //   ).subscribe();
  // }
  onFileSelected(event) {
    this.regexImageUrl = false;
    if (event.target.files[0].size > 9000000) {
      // file ảnh ko được lớn hơn 900mb
      return;
    }
    this.selectedImage = event.target.files[0];
    if (!event.target.files[0].name.match('^.*\\.(jpg|JPG|png|PNG|jpeg|JPEG)$')) {
      this.regexImageUrl = true;
      return;
    }
    this.contractForm.patchValue({imageUrl: this.selectedImage.name});
  }

  selectFile(event: any) {
    if (!event.target.files[0] || event.target.files[0].length === 0) {
      return;
    }
    if (event.target.files[0].size > 9000000) {
      return;
    }
    if (!event.target.files[0].name.match('^.*\\.(jpg|JPG|png|PNG|jpeg|JPEG)$')) {
      return;
    }
    this.checkImgSize = false;
    this.checkImg = false;
    this.editImageState = true;

    const mimeType = event.target.files[0].type;

    if (mimeType.match(/image\/*/) == null) {
      this.msg = 'Chỉ có file ảnh được hỗ trợ';
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    // tslint:disable-next-line:variable-name
    reader.onload = (_event) => {
      this.msg = '';
      this.url = reader.result;
    };
  }

  getCurrentDateTime(): string {
    return formatDate(new Date(), 'yyyy-MM-dd hh:mm:ss', 'en-US');
  }

  updateContract(contractUpdate: Contract) {
    this.contractForm.patchValue(contractUpdate);
  }

  submit() {
    const contract = this.contractForm.value;
    this.updateService.updateContract(contract).subscribe(
      value => this.toast.success('Chỉnh sửa thành công'),
      error => this.toast.error('Chỉnh sửa thất bại')
    );
  }
  compareWithId(item1, item2) {
    return item1 && item2 && item1.id === item2.id;
  }
  checkDateEnd(abstractControl: AbstractControl): any {
    const start = new Date(abstractControl.value.startDate);
    const now = new Date(abstractControl.value.endDate);
    if (now > start) {
      return null;
    } else if (now < start) {
      return {checkDate: true};
    }
    if (now > start) {
      return null;
    } else if (now < start) {
      return {checkDate: true};
    } else {
      return null;
    }
  }
}
