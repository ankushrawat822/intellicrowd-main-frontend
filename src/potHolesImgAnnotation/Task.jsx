import React, { useRef, useEffect, useState } from 'react';
import { fabric } from 'fabric';

import { Link } from 'react-router-dom'
import "./pot-holes.css"



const Task = () => {

    const canvasRef = useRef(null);
    const [canvas, setCanvas] = useState(null);
    const [rect, setRect] = useState(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [startX, setStartX] = useState(0);
    const [startY, setStartY] = useState(0);
  
    useEffect(() => {
      const newCanvas = new fabric.Canvas(canvasRef.current);
      setCanvas(newCanvas);
  
      fabric.Image.fromURL("https://res.cloudinary.com/dvwjzeupe/image/upload/v1714287455/plotHoles/kw2lru95cqinqk7gtbfh.jpg", (img) => {
        newCanvas.setBackgroundImage(img, newCanvas.renderAll.bind(newCanvas), {
          backgroundImageOpacity: 1,
          backgroundImageStretch: false,
        });
  
        newCanvas.on('mouse:down', (o) => {
          setIsDrawing(true);
          const pointer = newCanvas.getPointer(o.e);
          setStartX(pointer.x);
          setStartY(pointer.y);
  
          const newRect = new fabric.Rect({
            left: pointer.x,
            top: pointer.y,
            width: 0,
            height: 0,
            stroke: 'red',
            strokeWidth: 2,
            fill: 'transparent',
          });
          newCanvas.add(newRect);
          setRect(newRect);
        });
  
        newCanvas.on('mouse:move', (o) => {
          if (!isDrawing) return;
  
          const pointer = newCanvas.getPointer(o.e);
          const x = pointer.x;
          const y = pointer.y;
  
          rect.set({
            left: startX,
            top: startY,
            width: x - startX,
            height: y - startY,
          });
          newCanvas.renderAll();
        });
  
        newCanvas.on('mouse:up', () => {
          setIsDrawing(false);
        });
      });
    }, []);
  
    const handleSubmit = () => {
      const boundingBoxCoordinates = {
        left: rect.left,
        top: rect.top,
        width: rect.width,
        height: rect.height,
      };
      console.log(boundingBoxCoordinates);
      // Clear the canvas for the next image
      canvas.clear();
    };
  
    return (
        <>

            <div className='mx-4'>

                {/* starts */}

                {/* top page nav starts */}
                <div className=' my-3 py-2 bg-red-500 rounded-[8px] flex items-center justify-between px-3'>
                    {/* title of task */}
                    <p className='text-white font-semibold text-[20px]'> Draw Box Around Pot Holes </p>

                    {/*  current task time , overall time , exit , money , total hits done */}
                    <div className='flex items-center justify-center gap-x-5 text-[white]'>
                        {/* testing , to be deleted */}
                        <p className='font-bold '></p>
                        {/* <p>10:00</p> */}
                        <p>Guidelines</p>
                        <Link to="/user-dashboard"><button>Exit</button></Link>
                    </div>
                </div>
                {/* top page nav ends */}

                {/* main div */}
                <div className='flex items-start justify-center gap-5 '>
                    {/* instructons section */}
                    <div className='grey-bg rounded-[8px] w-[50%] p-3'>
                        <p className='text-[20px] font-semibold'>Instruction</p>
                        <p>Draw a bounding box around pot holes in the below image</p>

                        {/* <img style={{display:"none"}}   id="imageToAnnotate"  className='my-2' src="https://res.cloudinary.com/dvwjzeupe/image/upload/v1714287455/plotHoles/kw2lru95cqinqk7gtbfh.jpg" alt="" /> */}

                        <canvas
                            ref={canvasRef}
                            width={550}
                            height={550}
                            
                            
                        />

                    </div>
                    {/* upload section */}
                    <div className='grey-bg rounded-[8px] w-[50%] p-3 flex flex-col justify-center items-center '>


                        <button onClick={handleSubmit}
                            type="button"
                            className="mt-5 text-[21px] inline-flex items-center rounded-md bg-red-500 px-3 py-2 font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                        >

                            Submit
                        </button>
                    </div>

                </div>


            </div>


        </>
    )
}

export default Task