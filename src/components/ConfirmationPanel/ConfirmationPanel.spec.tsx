import * as React from 'react';
import {fireEvent, render, RenderResult} from '@testing-library/react';
import {ConfirmationPanel} from './';
import {ConfirmationPanelMessages} from './ConfirmationPanel';

describe('ConfirmationPanel', () => {

  interface PanelMock {
    textToFind: string;
    acceptTextToDisplay?: string;
    cancelTextToDisplay?: string;
    onAcceptMock?: () => void;
    onCancelMock?: () => void;
  }

  describe('Panel Message', () => {
    it('should display the default message', () => {
      const text = 'irrelevant text';

      const renderResult: RenderResult = render(
          <ConfirmationPanel>{text}</ConfirmationPanel>,
      );
      expect(renderResult.queryByText(text)).toBeTruthy();
    });

  });

  const renderPanelWithProps = ({
    textToFind, acceptTextToDisplay, onAcceptMock,
    cancelTextToDisplay, onCancelMock
  }: PanelMock) => {
    const renderResult: RenderResult = render(
        <ConfirmationPanel
            onAccept={onAcceptMock}
            acceptText={acceptTextToDisplay}
            onCancel={onCancelMock}
            cancelText={cancelTextToDisplay}
        />,
    );
    return renderResult.queryByText(textToFind);
  };

  describe('Accept button', () => {

    it('calls and event when accept is clicked', () => {
      const onAccept = jest.fn();

      const button = renderPanelWithProps({
        textToFind: ConfirmationPanelMessages.ACCEPT,
        onAcceptMock: onAccept
      });

      if(button) {
        fireEvent.click(button);
      }

      expect(onAccept).toHaveBeenCalled();
    });

    it('has the default accept text when it hasn\'t one', () => {
      const button = renderPanelWithProps({textToFind: ConfirmationPanelMessages.ACCEPT});
      expect(button).toBeTruthy();
    });

    it('has the given accept text', () => {
      const acceptText = 'irrelevant accept text';
      const button = renderPanelWithProps({
        textToFind: acceptText,
        acceptTextToDisplay: acceptText
      });
      expect(button).toBeTruthy();
    });
  });

  describe('Cancel button', () => {

    it('calls and event when cancel is clicked', () => {
      const onCancel = jest.fn();

      const button = renderPanelWithProps({
        textToFind: ConfirmationPanelMessages.CANCEL,
        onCancelMock: onCancel
      });
      if(button) {
        fireEvent.click(button);
      }

      expect(onCancel).toHaveBeenCalled();
    });

    it('has the default cancel text when it hasn\'t one', () => {
      const button = renderPanelWithProps({textToFind: ConfirmationPanelMessages.CANCEL});
      expect(button).toBeTruthy();
    });

    it('has the given cancel text', () => {
      const cancelText = 'irrelevant cancel text';
      const button = renderPanelWithProps({
        textToFind: cancelText,
        cancelTextToDisplay: cancelText,
      });
      expect(button).toBeTruthy();
    });
  });

});
