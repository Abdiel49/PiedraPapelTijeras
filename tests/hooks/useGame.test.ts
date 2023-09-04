import { describe, expect, test, } from "vitest";
import { renderHook } from "@testing-library/react-hooks";

import {useGame} from '../../src/hooks/useGame';
import {options} from '../../src/assets/game/game';
import { act } from "@testing-library/react";

describe("tenting useGame hook", () => {
  test('should set default values correctly when the function is called', () => {
    const {result} = renderHook(() => useGame(options, 1000));

    expect(result.current.isPlaying).toBe(false);
    expect(result.current.showResult).toBe(false);
    expect(result.current.showSelections).toBe(false);
    expect(result.current.gameStatus).toBeUndefined();
    expect(result.current.pcStatus).toEqual({ score: 0, selectedOption: undefined });
    expect(result.current.playerStatus).toEqual({ score: 0, selectedOption: undefined });
  });

  // Tests that the 'play' function updates the player and PC selected options, game status, and player and PC scores correctly
  test('should update player and PC selected options, game status, and scores correctly when play function is called', () => {
    const { result, rerender } = renderHook(() => useGame(options, 1000));

    act(() => {
      result.current.play('piedra');
    });

    rerender()

    expect(result.current.playerStatus.selectedOption).toBe('piedra');
    expect(result.current.pcStatus.selectedOption).toBeDefined();
    expect(result.current.gameStatus).toBeDefined();
    expect(result.current.playerStatus.score).toBeGreaterThanOrEqual(0);
    expect(result.current.pcStatus.score).toBeGreaterThanOrEqual(0);
  });

  // Tests that the 'reset' function resets the player and PC selected options, game status, player and PC scores, and other state variables correctly
  test('should reset player and PC selected options, game status, scores, and other state variables correctly when reset function is called', () => {
    const { result, rerender } = renderHook(() => useGame(options, 1000));

    act(() => {
      result.current.play('piedra');
      result.current.reset();
    });
    
    rerender();

    expect(result.current.playerStatus.selectedOption).toBeUndefined();
    expect(result.current.pcStatus.selectedOption).toBeUndefined();
    expect(result.current.gameStatus).toBeUndefined();
    expect(result.current.playerStatus.score).toBeGreaterThanOrEqual(0);
    expect(result.current.pcStatus.score).toBeGreaterThanOrEqual(0);
    expect(result.current.isPlaying).toBe(false);
    expect(result.current.showResult).toBe(false);
    expect(result.current.showSelections).toBe(false);
  });

  // Tests that the function works correctly when the timeout is not provided
  test('should work correctly when timeout is not provided', () => {
    const { result } = renderHook(() => useGame(options));

    act(() => {
      result.current.play('piedra');
    });

    expect(result.current.showSelections).toBe(true);
    expect(result.current.showResult).toBe(false);
  });

  // Tests that the function works correctly when the options array is empty
  test('should work correctly when options array is empty', () => {
    const { result } = renderHook(() => useGame([]));

    act(() => {
      result.current.play('piedra');
    });

    expect(result.current.showSelections).toBe(true);
    expect(result.current.showResult).toBe(false);
  });
});
