class Form{
    constructor(){
        this.input=createInput("NAME")
        this.destination=createInput("DESTINATION")
        this.pickUp=createInput("PICK UP POINT")
        this.time=createInput("PICK UP TIME")
        this.button=createButton('GO')
        this.greeting = createElement('h2');
         this.title = createElement('h2');
    }
    hide(){
        this.input.hide();
        this.destination.hide();
        this.pickUp.hide();
        this.time.hide();
        this.greeting.hide();
        this.title.hide();
    }
    display(){
        this.title.html("Smart Bus 'On the Go");
        this.title.position(displayWidth/2 - 50, 0);

        this.input.position(displayWidth/2-150,displayHeight/2-150)
        this.destination.position(displayWidth/2-150,displayHeight/2-100)
        this.pickUp.position(displayWidth/2-150,displayHeight/2-50)
        this.time.position(displayWidth/2-150,displayHeight/2)
       

        this.button.position(displayWidth/2+100,displayHeight/2+50)      
        getCount();
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            this.destination.hide();
            this.pickUp.hide();
            this.time.hide();
            this.greeting.html("Looking for passengers near you ")
            this.greeting.position(displayWidth/2 - 70, displayHeight/4);                  
            passengerCount=passengerCount+1
            updateCount(passengerCount);
          });
      
        }
    
    }
