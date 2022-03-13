/* -------------- Modal component ------------- */
// Used for :  new tile dialog

export class Modal{
  
  constructor(id){
    var tt=this;
    this.m = document.querySelector((id) ? id : '.modal');
    if (this.m) {
      this.targets = document.querySelectorAll('[data-toggle="' + this.m.id + '"]');
      this.closebtns = this.m.querySelectorAll('.close-modal');
    }
   
    this.targets.forEach(el => {
      el.addEventListener('click', function (e) {
        tt.open();
        //document.dispatchEvent(new CustomEvent('close'));
      });
    });
    this.closebtns.forEach(function (item) {
      item.addEventListener('click', function (e) {
        tt.close();
        document.dispatchEvent(new CustomEvent('close'));
      });
    });
    
  }
  close() {
    this.m.classList.remove('_show-modal');
  }
  open() {
    this.m.classList.add('_show-modal');
  }
}