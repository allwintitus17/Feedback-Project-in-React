import PropTypes from 'prop-types'

function card({children,reverse}) {
//   return <div className={`card ${reverse && 'reverse'}`}>{children}</div>

return <div className='card' style={{backgroundColor:reverse ? 'rgba(0,0,0,0.4)':'#fff',color:reverse ? '#fff':'#000',}}>{children}</div>
  

}

card.defaultProps={
    reverse:false,
}
card.propTypes={
    childern:PropTypes.node.isRequired,
    reverse:PropTypes.bool,
}
export default card;
