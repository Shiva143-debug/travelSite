import './index.css'

const TabItems = props => {
  const {Details, clickTab, isactive} = props
  const {id} = Details

  const TabClassnames = isactive ? `Tabclass active` : `Tabclass`

  const onClickImage = () => {
    clickTab(id)
  }

  return (
    <div className="d-flex">
      <li className="list-item-container">
        <button type="button" className={TabClassnames} onClick={onClickImage}>
          Day{id + 1}
        </button>
      </li>
    </div>
  )
}

export default TabItems
