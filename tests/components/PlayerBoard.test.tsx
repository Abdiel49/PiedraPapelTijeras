import React from 'react';
import { describe, expect, test, vi } from "vitest";
import { fireEvent, render, screen } from '@testing-library/react';

import {PlayerBoard} from '../../src/components/PlayerBoard';
import {options} from '../../src/assets/game/game';

import {PlayerBoardProps} from '../../src/types/Types';

describe("PlayerBoard component", () => {
  // Tests that the player board renders with options
  test('should render player board with options', () => {
    const onSelectOption = vi.fn();
    const props: PlayerBoardProps = {
      onSelectOption,
      player: 'self',
    };

    render(<PlayerBoard {...props} />);

    const optionButtons = screen.getAllByRole('button');
    expect(optionButtons).toHaveLength(options.length);
    expect(screen.getByText('Tu')).toBeDefined();
    expect(screen.getByText('Selecciona una opción')).toBeDefined();

    optionButtons.forEach((button, index) => {
      fireEvent.click(button);
      expect(onSelectOption).toHaveBeenCalledWith(options[index]);
    });
  });

  // Tests that the player board renders with disabled options
  test('should render player board with disabled options', () => {
    // Arrange
    const onSelectOption = vi.fn();
    const props: PlayerBoardProps = {
      onSelectOption,
      player: 'self',
      disableOptions: true,
    };

    // Act
    render(<PlayerBoard {...props} />);

    // Assert
    const optionButtons = screen.getAllByRole('button');
    optionButtons.forEach((button) => {
      expect(button).toHaveProperty('disabled');
    });
  });

  // Tests that the player board renders with a PC player
  test('should render player board with a PC player', () => {
    // Arrange
    const onSelectOption = vi.fn();
    const props: PlayerBoardProps = {
      onSelectOption,
      player: 'pc',
    };

    // Act
    render(<PlayerBoard {...props} />);

    // Assert
    expect(screen.getByText('PC')).toBeDefined();
  });

  test('should not call onSelectOption when disableOptions is true', () => {
    // Arrange
    const onSelectOption = vi.fn();
    const props: PlayerBoardProps = {
      onSelectOption,
      player: 'self',
      disableOptions: true,
    };

    // Act
    render(<PlayerBoard {...props} />);
    const optionButtons = screen.getAllByRole('button');
    optionButtons.forEach((button) => {
      fireEvent.click(button);
    });

    // Assert
    expect(onSelectOption).not.toHaveBeenCalled();
  });
})