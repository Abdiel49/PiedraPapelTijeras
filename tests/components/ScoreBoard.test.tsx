import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from "vitest";

import ScoreBoard from '../../src/components/ScoreBoard';


describe("ScoreBoard component", () => {
      // Tests that the function renders a section with class 'scoreBoard'
      test('should render a section with class "scoreBoard"', () => {
        render(<ScoreBoard score1={2} score2={0} />);

        const mark = screen.getByText('marcador');
        const winner = screen.getByText('2')
        const separator = screen.getByText('-')
        const loss = screen.getByText('0');
        
        expect(mark).toBeDefined();
        expect(separator).toBeDefined();
        expect(winner).toBeDefined();
        expect(loss).toBeDefined();
      });
})