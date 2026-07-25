// src/test/setup.ts
import "@testing-library/jest-dom";
import { vi } from "vitest";

class IntersectionObserverMock {
  root = null;
  rootMargin = "";
  thresholds = [];

  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
  takeRecords = vi.fn(() => []);
}

vi.stubGlobal("IntersectionObserver", IntersectionObserverMock);
