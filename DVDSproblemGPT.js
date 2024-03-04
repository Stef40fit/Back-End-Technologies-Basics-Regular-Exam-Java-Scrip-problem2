function dvd_collection(dvds) {
    // Extract the number of DVDs
    const numberOfDVDs = Number(dvds[0]);

    // Extract the DVDs
    const dvdCollection = dvds.slice(1, numberOfDVDs + 1);

    let i = numberOfDVDs + 1;

    while (i < dvds.length) {
        const command = dvds[i].split(' ');

        switch (command[0]) {
            case 'Watch':
                if (dvdCollection.length > 0) {
                    const watchedDVD = dvdCollection.shift();
                    console.log(`${watchedDVD} DVD watched!`);
                }
                break;

            case 'Buy':
                const dvdTitle = command.slice(1).join(' ');
                dvdCollection.push(dvdTitle);
                break;

            case 'Swap':
                const startIndex = Number(command[1]);
                const endIndex = Number(command[2]);

                if (startIndex >= 0 && startIndex < dvdCollection.length && endIndex >= 0 && endIndex < dvdCollection.length) {
                    [dvdCollection[startIndex], dvdCollection[endIndex]] = [dvdCollection[endIndex], dvdCollection[startIndex]];
                    console.log("Swapped!");
                }
                break;

            case 'Done':
                if (dvdCollection.length > 0) {
                    console.log(`DVDs left: ${dvdCollection.join(', ')}`);
                } else {
                    console.log("The collection is empty");
                }
                return;

            default:
                break;
        }

        i++;
    }

    // If the loop completes without encountering 'Done', print remaining DVDs
    if (dvdCollection.length > 0) {
        console.log(`DVDs left: ${dvdCollection.join(', ')}`);
    } else {
        console.log("The collection is empty");
    }
}

// Example usage
//dvd_collection(['3', 'The Matrix', 'The Godfather', 'The Shawshank Redemption', 'Watch', 'Done', 'Swap 0 1']);
//dvd_collection (['5', 'The Lion King', 'Frozen', 'Moana', 'Toy Story', 'Shrek', 'Buy Coco', 'Swap 2 4', 'Done'])
dvd_collection (['5', 'The Avengers', 'Iron Man', 'Thor', 'Captain America', 'Black Panther', 'Watch', 'Watch', 'Watch', 'Watch', 'Watch', 'Done']) 