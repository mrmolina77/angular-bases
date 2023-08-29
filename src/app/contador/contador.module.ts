import { NgModule } from "@angular/core";
import { ContadorComponet } from "./components/contador/contador.componet";


@NgModule({
  declarations: [
    ContadorComponet,
  ],
  exports: [
    ContadorComponet
  ]
})
export class ContadorModules {

}
