import React from 'react';
import Card from './shared/card';
import {useState} from 'react';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';
function FeedbackForm() {
    const [text,setText]=useState('')
    const [rating,setRating]=useState(10);
     const [btnDisabled,setBtnDisabled]=useState(true)
     const [message,SetMessage]=useState('')
    const handleTextChange=(e)=>{
        if(text===''){
            setBtnDisabled(true)
            SetMessage(null)
        }else if(text!=='' && text.trim().length<=10){
                       setBtnDisabled(true)
                    
                       SetMessage('Text Must be atleast 10 charecters')
        }
        else{
            SetMessage(null)
            setBtnDisabled(false)
        }
        setText(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(text.trim().length>10){
            const newFeedback={
                text: text,
                rating
            }
             console.log(newFeedback)
            }
        }
    
  return (
    <Card>
        <form onSubmit={handleSubmit}>
         <h2>How Would You Rate the Service With us</h2>
          <RatingSelect select={(rating)=>setRating(rating)}/>
        <div className='input-group'>
            <input onChange={handleTextChange} type='text' placeholder='Write a Review' value={text}/>
            <Button type='submit' isDisabled={btnDisabled}>SEND</Button>
        </div>
        {message && <div className='message'>{message}</div> }
        </form>
    </Card>
  )
}
export default FeedbackForm
