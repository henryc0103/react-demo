import './snapshot';
export * from '@cucumber/cucumber';
export { getDataSnapshot } from './dataSnapshot';
export { page } from './puppeteerConfig';

export class BaseWorld {
  public mockSwitches = {} as Record<string, string>;

  getStoryUrl(storyId: string): string {
    return `http://localhost:9009/iframe.html?id=${storyId}&${this.getMockSwitchesQueryParam()}`;
  }

  setMockSwitch(name: string, value: string): void {
    this.mockSwitches[name] = value;
  }

  private getMockSwitchesQueryParam(): string {
    return Object.entries(this.mockSwitches)
      .map(([name, value]) => `mock=${name}--${value}`)
      .join('&');
  }
}
