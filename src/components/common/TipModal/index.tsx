import React from 'react'

import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import {
  hiddenAlertForRedux,
  selectAlertDisplay,
  selectAlertContent,
  selectAlertOnHide,
} from '../../../app/slice/alertSlice'

const TipModal = () => {
  const dispatch = useAppDispatch()
  const display = useAppSelector(selectAlertDisplay)
  const { title, detail } = useAppSelector(selectAlertContent)
  const onHide = useAppSelector(selectAlertOnHide)

  return (
    <Modal show={display} size='lg' onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>{'Tips'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{title}</h4>
        <p>{detail}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => dispatch(hiddenAlertForRedux())}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default TipModal

// *.standalone.powerarena.com, 183.136.194.50