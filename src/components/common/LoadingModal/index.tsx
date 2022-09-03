import './style.scss'

import { Modal } from 'react-bootstrap'

import {RootState} from '../../../app/store'

interface Props {
    show: boolean
}
      
const LoadingModalUI = ({show}: Props) => {
    return (
        <Modal show={show} fullscreen={true}>
        <Modal.Body className='LoaderContainer'></Modal.Body>
      </Modal>
    )
}

export default connect((state: RootState) => ({ show: state. }))(LoadingModalUI)