//three bars one for buttons one for the content and one for bottom menu


export default function wordContent () {

    const container = document.createElement("div");
    container.className = "container"
    
    const bar1 = document.createElement("section");
    bar1.classList.add("bar")
bar1.id = "bar1Specs"
    
    const bar1MenuItems = ["File", "Edit", "View", "Insert", "Format", "Tools", "Table", "Window", "Help"];
    
    bar1MenuItems.forEach((Item, index) => {
    let underlinedText;

    if (Item === "Format" || Item === "Table") {
        underlinedText = `${Item[0]}<u>${Item[1]}</u>${Item.slice(2)}`;
    } else {
        underlinedText = `<u>${Item[0]}</u>${Item.slice(1)}`;
    }
    
    bar1.innerHTML += `<p id="item${index}" class="blacktxt">${underlinedText}</p>`;
});
container.appendChild(bar1)

const line = document.createElement("hr")
line.id = "line1"
container.appendChild(line)

const bar2 = document.createElement("section")
bar2.classList.add("bar")
bar2.id = "bar2Specs"
for(let i = 0; i <= 15; i++) {
    if(i !== 14) {

        const iconNames = ["paper", "open-folder", "floppydisk", "letter"]
        
        const icon = document.createElement("img")
        if (i <= 3) {

        icon.src = `./appIcons/${iconNames[i]}.svg`
        } else {
        icon.src = "./appIcons/paper.svg"

        }
            icon.id = `icon${i}`
        icon.classList.add("icons")
        icon.classList.add("clickable")
        bar2.appendChild(icon)
    }
    else {
        const sizeDropDown = document.createElement("select")
        for(let i = 0; i < 10; i++) {
            const size = document.createElement("option");
            size.value = (i + 1) * 10
            let sizetxt = document.createTextNode(`${(i + 1) * 10}%`)
            size.append(sizetxt)
            sizeDropDown.appendChild(size)
        }
        bar2.appendChild(sizeDropDown)
    }
}

const line2 = document.createElement("hr")
line2.id = "line2"

container.appendChild(bar2)
container.appendChild(line2)

 
return container;
}

        //bar 1.2
            //split into 6 parts
                //part 1
                    //icon of paper(V), icon of open folder (V), icon of a floppydisk (V), icon of a letter(V)
                //part 2
                    // icon of a printer, icon of a paper with magnifying glass, icon of a checkmark and abc
                //part 3
                    // icon of siccors, icon of two papers, icon of a clipboard
                // part 4
                    // icon of a reversal arrow
                // part 5
                    // icon of a globe with chain, icon of a tabell
                // part 6
                    // icon dropdown menu with %(?) and a help icon
        // bar 1.3
            // split in five parts
                // part 1 
                    // dropdown of both font and fontsize
                //part 2
                    // bold ittalics and underline
                // part 3
                    // left text, center text
                // part 4
                    // ol, ul and indentation down and up
                // part 5
                    // border
// bar 2
    // outside left, top. choose where document start writing (padding)
    // outside right, bottom. scroll bars with icons
    //inside thin dark bg color #aca899
        // inside inside white document with border color #000000 1 px solid
//bar 3
    // two bars
        // bar 3.1
            //three parts
                // part 1
                    // dropdown for draw, cursor, circle arrow
                //part 2
                    // autoshapes, line, arrow, square, circle/oval, text document, an A with two shadows, a portrait of a human with dotted border
                //part 3
                    /// bucket with color (dropdown), pencil with color (dropdown), letter with color (dropdown)
        // bar 3.2 
            //page info, sec info, 
            // at where info, line info, col info
            // rec. trk. ext