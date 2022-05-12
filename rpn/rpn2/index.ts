type Operator = "+" | "*" | "-" | "/" | "N"; 

export function calculateAddition(a:number, b:number):number {
  return a + b
}
export function calculateSoustraction(a:number, b:number):number {
  return a - b
}
export function calculateDivision(a:number, b:number):number {
  return a / b
}
export function calculateMultiplication(a:number, b:number):number {
  return a * b
}
export function calculateNegation(a:number):number {
  return -a
}

export function calculate(a:number, op:Operator, b:number):number {
  switch (op) {
      case "+":
          return calculateAddition(a, b);
      case "*":
          return calculateMultiplication(a, b);
      case "-":
          return calculateSoustraction(a, b);
      case "/":
          return calculateDivision(a, b);
      case "N":
        return calculateNegation(a);
      default:
          break;
  }
}

function format(tab:Array<any>, i:number):Array<any> {
  if(tab[i] === "N"){
    tab[i-1] = calculate(Number(tab[i-1]),"N",0)
    tab.splice(i,6)
  }else{
    tab[i-2] = calculate(Number(tab[i-2]), tab[i], Number(tab[i-1]))
    tab.splice(i-1,2)
  }

  return tab
}

export function polishReverse(text:string):string {
  let tab = text.split("")

  const search = (e) => e === "*" || e === "/" || e === "+" || e === "-" || e === "N";
  
  while( tab.findIndex(search) !== -1) {
      let i = tab.findIndex(search)
      tab = format(tab,i)
  }

  return typeof tab[0] === "number" && !isNaN(tab[0]) ? tab[0] : "#ERROR"
}
