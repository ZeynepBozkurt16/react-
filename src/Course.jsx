import React from 'react'

function Course({ image, title, description }) {
    // console.log(props)
    // // 2.kullanım
    // const title = props.title
    // const description = props.description
    // 3.kullanım
    // const { title, description } = props;
    //! 4.kullanımda isimleri aynı olmalı

    return (
        <div>
            {/* 1.kullanım */}
            {/* <div>{props.title}</div>
            <div>{props.description}</div> */}
            <img src={image} alt="" />
            <div>{title}</div>
            <div>{description}</div>
        </div>
    )
}

export default Course
