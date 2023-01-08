import React from 'react'
export default function Alert(props) {
  return (//if props.alert==null nothing will be evaluauated which are present infront of it.
    props.alert &&<div class="alert alert-warning alert-dismissible fade show" role="alert">
    <strong></strong> {props.alert}
  </div>
  )
}
