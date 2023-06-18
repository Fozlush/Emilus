import React, {useState, useEffect} from 'react'
import { Input, Row, Col, Card, Form, Upload, InputNumber, message, Select, Button } from 'antd';
import DragBlock from './Block';

const blockData = {
  line: {x: 3, y: 1, bg: 'bg-success'},
  square: {x: 2, y: 2, bg: 'bg-warning'},
  lineY: {x: 1, y:3, bg: 'bg-danger'}
}

const Scheduler = () => {
  const [board, setBoard] = useState([])
  const [schemeData, setSchemeData] = useState([])
  const [currentBlock, setCurrentBlock] = useState(null)

  useEffect(() => {
    clearBoard()
    setBoard([...board])
  }, [])

  const clearBoard = () => {
    board.length = 0
    for(let x = 0; x < 20; x++){
      board.push([])
      for(let y = 0; y < 20; y++){
        board[x].push(0)
      }
    }
  }

  const dowloadSceme = () => {
    let link = document.createElement('a');
    let file = new Blob([JSON.stringify(schemeData)], {type: 'application/json'});
    link.href = URL.createObjectURL(file);
    link.download = "scheduler";
    link.click();
  }

  const uploadSceme = (file) => {
    let reader = new FileReader();
    reader.readAsText(file.file);
    reader.onload = function() {
      setSchemeData(JSON.parse(reader.result))
      JSON.parse(reader.result).forEach((element) => {
        board[element.cord.i][element.cord.index] = {id: element.id, type: element.type, cord: element.cord}
      })
      setBoard([...board])
    };

  }

  const dragHandler = (id, type) => {
    setCurrentBlock({id: id, type: type})
  }

  const dragOverHandler = (e) => {
    e.preventDefault()
  }

  const dropHandler = (e, cord) => {
    e.preventDefault()
    e.stopPropagation()
    let error = false
    let schemeDataWorking = [...schemeData]
    if(!error){
      if(!currentBlock.id){
        if(!schemeDataWorking.length){
          currentBlock.id = 1
        }else{
          let max = schemeDataWorking.reduce((acc, curr) => acc.id > curr.id ? acc : curr);
          currentBlock.id = max.id + 1
        }
      }else{
        schemeDataWorking = schemeDataWorking.filter((element) => {
          return element.id !== currentBlock.id
        })
      }
      schemeDataWorking.push({id: currentBlock.id, type: currentBlock.type, cord: cord})
      setSchemeData([...schemeDataWorking])
      clearBoard()
      schemeDataWorking.forEach((element) => {
        board[element.cord.i][element.cord.index] = {id: element.id, type: element.type, cord: element.cord}
      })
      setBoard([...board])
    }
  }

	return (
    <Card>
      <Row>
        <DragBlock baseBlock={blockData} type='line' id={0} dragHandler={dragHandler}></DragBlock>
        <DragBlock baseBlock={blockData} type='square' id={0} dragHandler={dragHandler}></DragBlock>
        <DragBlock baseBlock={blockData} type='lineY' id={0} dragHandler={dragHandler}></DragBlock>
        <Button type='link' className='bg-primary text-white' onClick={() => {dowloadSceme()}}>download</Button>
        <Upload customRequest={(file) => {uploadSceme(file)}} showUploadList={false}>
          <Button className='bg-primary text-white'>upload</Button>
        </Upload>
      </Row>
      <Row className='mt-3'>
        {board.map((e, i) => {
          return (
            <Row key={`row-${i}`} className='w-100'>
              {e.map((el, index) => {
                return (
                  <Col key={`col-${index}`} className='bg-dark border p-3 position-relative'
                    onDrop={(e) => dropHandler(e, {i, index})}
                    onDragOver={(e) => dragOverHandler(e)}>
                      {!!el && <DragBlock baseBlock={blockData} type={el.type} id={el.id} dragHandler={dragHandler}></DragBlock>}
                  </Col>
                )
              })}
            </Row>
          )
        })}
      </Row>
    </Card>
	)
}

export default Scheduler
