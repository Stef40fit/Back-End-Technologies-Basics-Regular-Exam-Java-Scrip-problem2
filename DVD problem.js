function dvd_collection(dvds)
{
const numberOfDVDS = parseInt(dvds[0]);
const allDVDS = dvds.slice(1,numberOfDVDS+1);
const allCommands = dvds.slice(numberOfDVDS+1);
//console.log(numberOfDVDS);//test
//console.log(allDVDS);//test
//console.log(allCommands);//test

for(let i=0; i<allCommands.length; i+=1)
    {
     let rawCommand = allCommands[i].split(' ');
     let commandName = rawCommand[0];
          
        
      if( commandName === "Watch")
        {
            const watchDVD = allDVDS.shift();
            console.log(`${watchDVD} DVD watched!`);
            //console.log(allDVDS)//test
        }
      else if(commandName==="Buy")
        {
            const buyDVD = allCommands[i].slice(4);
            allDVDS.push(buyDVD)
            //console.log(allDVDS)//test
            if (!buyDVD) {continue;}
        }
        else if(commandName==="Swap")
        {
            let firstIndex = parseInt(rawCommand[1]);
            let endIndex = parseInt(rawCommand[2]);
            if(isNaN(firstIndex)||firstIndex<0||firstIndex>=allDVDS.length){continue}
            if(isNaN(endIndex)||endIndex<0||endIndex>=allDVDS.length){continue}
            let dvdOnFirstIndex = allDVDS[firstIndex];
            allDVDS[firstIndex] = allDVDS[endIndex];
            allDVDS[endIndex] = dvdOnFirstIndex;
            //console.log(allDVDS)//test
            console.log("Swapped!")
        }
        else if (commandName ==="Done")
        {
            if(allDVDS.length){console.log(`DVDs left: ${allDVDS.join(", ")}`)}
           break;
        }
    }
    
    if(!allDVDS.length) {console.log("The collection is empty")}
}

//dvd_collection(['5', 'TheLionKing', 'Frozen', 'Moana', 'ToyStory', 'Shrek', 'Buy Coco', 'Watch', 'Swap 2 4', 'Done']);
//dvd_collection(['3', 'The Matrix', 'The Godfather', 'The Shawshank Redemption', 'Watch', 'Done', 'Swap 0 1'])
dvd_collection (['5', 'The Lion King', 'Frozen', 'Moana', 'Toy Story', 'Shrek', 'Buy Coco', 'Swap 2 4', 'Done'])
// (['5', 'The Avengers', 'Iron Man', 'Thor', 'Captain America', 'Black Panther', 'Watch', 'Watch', 'Watch', 'Watch', 'Watch', 'Done']) 