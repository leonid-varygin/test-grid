export class Table {
  static className = 'excel__table'

  constructor(selector, options) {
    this.$el = document.querySelector(selector)
    this.options = options.data
  }

  generateTable() {
    const $root = document.getElementById('table__elements')

    this.options.forEach(el => {
      $root.insertAdjacentHTML('afterend', `
        <tr>
            <td contenteditable="true">${el.id}</td>
            <td contenteditable="true">${el.year}</td>
            <td contenteditable="true">${el.filmTitle}</td>
            <td contenteditable="true">
                <input type="checkbox">
            </td>
            <td>${el.votes}</td>
        </tr>
      `)
    })
    return $root
  }


  render() {
    this.$el.append(this.generateTable())
  }
}

