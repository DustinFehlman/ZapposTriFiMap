function createObjects(numberOfObjects){
     var arr = [];
     for(var x = 0; x < numberOfObjects; x++){
         var person = new Person();
         person.xCord = Math.floor((Math.random() * 400) + 1);
         person.yCord = Math.floor((Math.random() * 400) + 1);
         arr [x] = person;
     }

    return arr;
}