import React from 'react'
import {Check,Close}  from "@mui/icons-material"
import {pricing} from '../data/dummydata'


const PricingPlanCard = () => {
  
return (
  <>
{pricing.map((plan, i) => {
  return (
<div key={i}   className='pricing-item'>
    <div className='pricing-plan'>
        <div className='pricing-header'>

            <h3>{plan.planName}</h3>
            <h1>{plan.planType}</h1>
        </div>
        <div className='pricing-price'>
            {plan.wasPrice!=='' ? <p className='was'>
            <span className='currency'>R</span>
            <span className='price'>{plan.wasPrice}</span>
            </p> : ''}
            <p className='now'>
            <span className='currency'>R</span>
            <span className='price'>{plan.nowPrice}</span>
            </p>
            <span className='period'>/per {plan.per}</span>
        </div>
        <div className='pricing-body'>
            <ul>
             
            {plan.checkedFeatures.toString().split(',').map((checkFeatures,index)=>
                <li className='checkedFeatures' key={index}><Check /> {checkFeatures }</li>
)}

{plan.unCheckedFeatures.toString().split(',').map((unCheckedFeatures,a)=>
                <li className='unCheckedFeatures' key={a}><Close /> {unCheckedFeatures }</li>
            )}
                
            </ul>
        </div>
        <div className='pricing-footer'>
            <a href='#quote' data-plan-details='Web Design & development - starter plan - R1 200' className='btn-1 plan-btn'>select plan</a>
        </div>
    </div>
</div>
)})}
</>
)
}

export default PricingPlanCard