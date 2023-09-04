import React from 'react';
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import Header from '../../src/components/Header';

describe("Header component tests", () => {
  // Tests that the Paragraph component is rendered with the correct props
  test('should render Paragraph component with correct props', () => {
    render(<Header />);
    const paragraphElement = screen.getByText('Piedra, Papel o tijera');
    expect(paragraphElement).toBeInTheDocument();
    expect(paragraphElement).toHaveClass('paragraph');
    expect(paragraphElement).toHaveClass('paragraph_center');
    expect(paragraphElement).toHaveClass('paragraph_title');
  });

  // Tests that the Paragraph component receives the correct value prop
  test('should render Paragraph component with correct value prop', () => {
    render(<Header />);
    const paragraphElement = screen.getByText('Piedra, Papel o tijera');
    expect(paragraphElement).toBeInTheDocument();
  });
})