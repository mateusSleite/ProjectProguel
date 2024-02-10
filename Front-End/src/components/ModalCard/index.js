import React, { useState } from 'react';
import Modal from 'react-modal';
import { StyledModalContent } from './styled';

export default function CustomModal({ isOpen, onRequestClose, contentLabel, children }) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel={contentLabel}
            style={{
                overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0.50)'
                },
                content: {
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    marginRight: '-50%',
                    transform: 'translate(-50%, -50%)',
                    border: 'none',
                    display: 'flex',
                    justifyContent: 'center',
                    background: 'none',
                    padding: 0,
                    overflow: 'visible',
                    width: 'auto',
                    height: 'auto'
                }
            }}
        >
            <StyledModalContent>
                {children}
            </StyledModalContent>
        </Modal>
    );
}
