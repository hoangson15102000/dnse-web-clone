import React from 'react'

const Date = () => {
    var showDate = new Date();
    var displayToCurrentTime = showDate.getDate() + '/' + showDate.getMonth() + '/' + showDate.getFullYear();
    var displayTime = showDate.getHours() + ':' + showDate.getMinutes() + ':' + showDate.getSeconds();
    return (
        <div>
            <input type="text" value={displayToCurrentTime} readOnly="true" />
            <p value={displayTime}></p>
        </div>
    )
}

export default Date
