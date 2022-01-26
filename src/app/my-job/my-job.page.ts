import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';
import { AllserviceService } from '../allservice.service';
import { ToastService } from '../services/toast.service';



@Component({
  selector: 'app-my-job',
  templateUrl: './my-job.page.html',
  styleUrls: ['./my-job.page.scss'],
})
export class MyJobPage implements OnInit {

  public item:any = [];
  jobList = [];
  constructor(public navCtrl:NavController,
    private allserviceService:AllserviceService,
    private toastService:ToastService,
    private LoadingController:LoadingController
    ){

  }

  GetDataMyJob(){
    this.presentLoading('Getting Data..');
    this.allserviceService
    .userhistoryjob()
    .subscribe((res) => {
      console.log(res);
      this.jobList = res.data;
      this.LoadingController.dismiss();
    }, async (error) => {
      this.toastService.presentToast('error getting Data..');
      this.LoadingController.dismiss();
    });
  }

  today : number = Date.now();
     ngOnInit() {
       this.GetDataMyJob();
  }
  
  OpenDetail(data){
    this.navCtrl.navigateForward('detail-job', { state: data });
  }

  async presentLoading(message :string) {
    const loading = await this.LoadingController.create({
      message
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }
}


// jobList = [{
//   itemCompany:'PT. Citra Lestari',
//   itemDueDate:'2021-01-01',
//   itemSalary:'$1200',
//   itemTitle:'BACKEND DEVELOPER',
//   itemPostDescription:'LOWONGAN KERJA TERBARU',
//   ItemDetailDescription : 'PT Wings Group merupakan salah satu perusahaan yang bergerak dalam perusahaan penghasil produk-produk rumah tangga dan pemeliharaan kesehatan diri terkemuka di Indonesia Sedangkan. Perusahaan ini berdiri pada tahun 1948. PT WINGS GROUP, yang tentu sudah tidak asing lagi ditemui selama ini diantaranya adalah, seperti Emeron, Page One, Ciptadent dan Mama lemon. Dan masih banyak lainnya. PT Group wings Adalah gabungan dari beberapa perusahaan makanan dan minuman seperti Untuk profil lengkap silahkan kunjungi situs resmi wingscareer POSISI YANG DIBUTUHKAN 1. Operator Produksi 2. Operator Packing 3. Operato Gudang 4. QC (Quality Control) 5. Dan Staff Administrasi Dengan Kualifikasi Khusus Sebagai Berikut : 1. Usia 18-26 tahun 2. 3. Laki- Laki / Perempuan 4. Berat badan minimal 45 kg 5. Terbuka untuk semua jurusan 6. Pendidikan minimal SMA / SMK sederajat 7. Tinggi badan minimal Pria 165 cm, Wanita 155 cm 8. Memiliki semangat yang tinggi untuk bekerja dan bisa kerja sama dengan Tim Bagi yang telah memenuhi persyaratan, anda selanjutnya dapat melakukan pendafataran dengan cara mengisi form Lamaran anda terlebih dahulu, berguna untuk mengikuti proses seleksi calon karyawan. HARAP DI ISI SESUAI FORMAT DI BAWAH INI 1. WINGS GROUP : 2. Nama : 3. Usia : 4. Agama : 5. Jenis Kelamin : 6. Tempat/Tgl Lahir : 7. Status Perkawinan : 8. Posisi Yang di Lamar : 9. Alamat Domisili Sekarang : 10.Pendidikan Terakhir (Jurusan) : Lalu Kirim melalui Online permohonan singkat di WhatsApp berikut : (o8 =12 =95 -83 =43 =52)',
//   itemAdress:'Jakarta, Pusat',
//   itemStatus:'Full Time',
//   itemImg:'',
//   ItemCategory:'IT',
//   ItemRequirements:'JAVA, PHP',
//   itemStatusApply:'Interview'
// }
// ]

