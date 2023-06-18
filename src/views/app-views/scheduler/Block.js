import React from 'react'

const DragBlock = ({baseBlock, type, id, dragHandler}) => {
  const height = baseBlock[type].y * 33
  const width = 1 + baseBlock[type].x * 33
  const pos = id ? 'absolute' : 'relative'
  return (
    <div
      style={{width: width, height: height, cursor: 'grab', position: pos, zIndex: 1, top: 0, left: 0}}
      className={baseBlock[type].bg}
      draggable={true}
      onDragStart={() => dragHandler(id, type)}
    >
    </div>
  )
}

export default DragBlock