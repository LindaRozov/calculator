document.addEventListener('DOMContentLoaded', () => {
  const number1 = document.getElementById('number1')
  const number2 = document.getElementById('number2')
  const result = document.getElementById('result')
  const operation = document.getElementById('operation')
  const calculateBtn = document.getElementById('calculate')
  const clearBtn = document.getElementById('clear')

  const operationType = {
    addition: '+',
    substraction: '-',
    multiplication: '*',
    division: '/'
  }

  function calculate() {
    const selectedOperation = operation.options[operation.selectedIndex].text;
    if (selectedOperation === operationType.addition) {
      addition()
    } else if (selectedOperation === operationType.substraction) {
      substraction()
    } else if (selectedOperation === operationType.multiplication) {
      multiplication()
    } else if (selectedOperation === operationType.division) {
      division()
    }
  }


  function addition() {
    let sum = Number(number1.value) + Number(number2.value)
    result.value = sum
  }


  function substraction() {
    let sub = Number(number1.value) - Number(number2.value)
    result.value = sub

  }


  function multiplication() {
    let mult = Number(number1.value) * Number(number2.value)
    result.value = mult
  }


  function division() {
    let divs = Number(number1.value) / Number(number2.value)
    result.value = divs
  }

  function clear() {
    number1.value = ''
    number2.value = ''
    result.value = ''
    operation.value = '+'
  }

  calculateBtn.addEventListener('click', calculate)
  clearBtn.addEventListener('click', clear)
})
