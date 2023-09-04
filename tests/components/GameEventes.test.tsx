import React from 'react';
import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";

import {GameEvents} from '../../src/components/GameEvents';

import {GameEventsProps} from '../../src/types/Types';

describe("GameEventes test", () => {
  // Tests that the component renders without errors when all props are provided
  test('should render without errors when all props are provided', () => {
    // Arrange
    const props: GameEventsProps = {
      pcSelectedOption: 'piedra',
      playerSelectedOption: 'papel',
      gameStatus: 'You Win',
      showResult: true,
      showChoises: true,
    };

    // Act
    render(<GameEvents {...props} />);

    // Assert
    expect(screen.queryByText('¡Ganaste!')).toBeInTheDocument();
    expect(screen.queryByText('papel')).toBeInTheDocument();
    expect(screen.queryByText('piedra')).toBeInTheDocument();
  });

  // Tests that the player's selected option is rendered when showChoises is true and playerSelectedOption is provided
  test('should render the player\'s selected option when showChoises is true and playerSelectedOption is provided', () => {
    // Arrange
    const props: GameEventsProps = {
      playerSelectedOption: 'papel',
      showChoises: true,
    };

    // Act
    render(<GameEvents {...props} />);

    // Assert
    expect(screen.queryByText('papel')).toBeInTheDocument();
  });

  // Tests that the PC's selected option is rendered when showChoises is true and pcSelectedOption is provided
  test('should render the PC\'s selected option when showChoises is true and pcSelectedOption is provided', () => {
    // Arrange
    const props: GameEventsProps = {
      pcSelectedOption: 'piedra',
      showChoises: true,
    };

    // Act
    render(<GameEvents {...props} />);

    // Assert
    expect(screen.queryByText('piedra')).toBeInTheDocument();
  });

  // Tests that the game result message is rendered when showResult is true and gameStatus is provided
  test('should render the game result message when showResult is true and gameStatus is provided', () => {
    // Arrange
    const props: GameEventsProps = {
      gameStatus: 'You Win',
      showResult: true,
    };

    // Act
    render(<GameEvents {...props} />);

    // Assert
    expect(screen.queryByText('¡Ganaste!')).toBeInTheDocument();
  });
})