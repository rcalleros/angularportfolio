import { CrossBrowserPaddingDirective } from './cross-browser-padding.directive';

describe('CrossBrowserPaddingDirective', () => {
  let mockRenderService;
  beforeEach(()=>{
    mockRenderService = jasmine.createSpyObj(['addStyle', 'hasPadding']);
  });
  it('should create an instance', () => {
    const directive = new CrossBrowserPaddingDirective(mockRenderService,mockRenderService);
    expect(directive).toBeTruthy();
  });
});
