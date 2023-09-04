import React from 'react';
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import Header from '../../src/components/Header';

describe("Header component tests", () => {
  // Tests that the Paragraph component is rendered with the correct props
  test('should render Paragraph component with correct props', () => {
    render(<Header />);
    const paragraphElement = screen.getByText('Piedra, Papel o tijera');
    expect(paragraphElement).toBeDefined();
    expect(paragraphElement.className).includes('paragraph');
    expect(paragraphElement.className).includes('paragraph_center');
    expect(paragraphElement.className).includes('paragraph_title');
  });

  // Tests that the Paragraph component receives the correct value prop
  test('should render Paragraph component with correct value prop', () => {
    render(<Header />);
    const paragraphElement = screen.getByText('Piedra, Papel o tijera');
    expect(paragraphElement).toBeDefined();
  });
})