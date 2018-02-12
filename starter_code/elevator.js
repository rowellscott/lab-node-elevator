class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.requests   = [];
    this.direction = ""
    this.intervalId;
    this.waitingList = [];
    this.passengers = [];
  }

  start() { 
   this.intervalId = setInterval(() => this.update(), 1000)
  }
  
  stop() { 
    clearInterval(this.intervalId)
  }
  
  update() { 
    if(this.requests.length != 0){
        this.goToFloor();
        this._passengersEnter();
        this.goToFloor();
        this._passengersLeave();
      }
      
    this.log();
  }

  _passengersEnter() { 
    // if(this.requests.indexOf(this.floor) != -1){
        let people = this.waitingList.filter(waitingPerson => waitingPerson.originFloor === this.floor)
        people.forEach(person => {
        this.passengers.push(person)
        var index = this.waitingList.indexOf(person);
         this.waitingList.splice(index, 1);
         this.requests.push(person.destinationFloor)
       
        //Get all passengers in waitingList with originFloor === this.floor
        //this.waitingFloor remove all people (person)
        //this.requests.push(person.destinationFloor)
        //console.log(person.name + "has enter the elevator")
        this.requests.splice(this.requests.indexOf(this.floor), 1)
        console.log(person.name + " has entered the elevator")
        })
  
}
  
  _passengersLeave() { 
      //if passenger.destinationFloor === this.floor ? passengers.splice(indexOf(passenger), 1)
      this.passengers.forEach(passenger =>{
        if(passenger.destinationFloor === this.floor){
            this.passengers.splice(this.passengers.indexOf(passenger), 1);
            this.requests.splice(this.requests.indexOf(this.floor), 1)
            console.log(passenger.name + " has left the elevator")
        }
      })
    }
  
  floorUp() {
    if(this.floor < 10){
    this.floor += 1
    this.direction = 'up'}
  }
  
  floorDown() { 
    if(this.floor > 0){
    this.floor -= 1;
    this.direction = 'down'}
  }
  
  call(person) {
      this.waitingList.push(person)
      this.requests.push(person.originFloor)
   }
  
  log() { 
   console.log("Direction: " + this.direction + " | Floor: " + this.floor)
   console.log(this.requests)
   console.log(this.waitingList)
   console.log(this.passengers)
  }

  goToFloor() {
    if(this.requests[0] > this.floor)
		{ 
		  for(let i=0; i< this.requests[0] - this.floor; i++){
		      this.floorUp();
    }
    }
	  else if(this.requests[0] < this.floor){
      for(let i=0; i< this.floor - this.requests[0]; i++){
        this.floorDown();
        }   
      }
    }
}

module.exports = Elevator;
