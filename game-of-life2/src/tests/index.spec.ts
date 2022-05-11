import * as matchers from "jest-extended";
import * as gameOfLife from '../script/game';
expect.extend(matchers);



it("Tableau existe", function () {
    let tableau = document.querySelectorAll("td")
    expect(tableau).toBeGreaterThan(1);
});

it("Définition d'une cellule", function(){
    let cellule = Math.round(Math.random())
    expect(cellule).toBeBoolean();
})

it("Au moins une cellule est vivante", function () {
    let cellsList = document.getElementsByClassName("alive");
    expect(cellsList).toBeGreaterThan(1);
});



