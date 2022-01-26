import { NgModule } from "@angular/core";
import { CommonModule} from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { InputCvComponent } from './input-cv.component';

@NgModule({

    declarations : [InputCvComponent],
    imports:[CommonModule, IonicModule],
    exports:[InputCvComponent],
})

export class InputCvModule {}