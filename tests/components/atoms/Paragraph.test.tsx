import React from 'react';
import { describe, expect, test } from "vitest";
import { render, screen } from '@testing-library/react';

import Paragraph from '../../../src/components/atoms/Paragraph';
import {ParagraphPros} from '../../../src/types/Types';

describe("Paragraph component", () => {
  // Tests that the function renders a paragraph element with the given value
  test('should render a paragraph element with the given value', () => {
    // Arrange
    const props: ParagraphPros = {
      value: "Lorem ipsum",
    };

    // Act
    render(<Paragraph {...props} />);

    // Assert
    expect(screen.getByText("Lorem ipsum")).toBeDefined();
  });

  // Tests that the function renders a paragraph element with the given className
  test('should render a paragraph element with the given className', () => {
    // Arrange
    const props: ParagraphPros = {
      value: "Lorem ipsum",
      className: "custom-class",
    };

    // Act
    render(<Paragraph {...props} />);

    // Assert
    expect(screen.getByText("Lorem ipsum").className).includes("custom-class");
  });

  test('should render a paragraph element with all props text ', () => {
    // Arrange
    const props: ParagraphPros = {
      value: "Lorem ipsum",
      bold: true,
      title: true,
      body: true,
      center: true,
      subTitle: true,
    };

    // Act
    render(<Paragraph {...props} />);
    const paragraph = screen.getByText("Lorem ipsum");

    // Assert
    expect(paragraph.className).includes("paragraph");
    expect(paragraph.className).includes("paragraph_bold");
    expect(paragraph.className).includes("paragraph_title");
    expect(paragraph.className).includes("paragraph_sub_title");
    expect(paragraph.className).includes("paragraph_center");
    expect(paragraph.className).includes("paragraph_body");
  });
});
