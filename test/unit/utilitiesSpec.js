define(['FamilySearch'], function(FamilySearch) {
  describe('Utilities', function() {
    it('redirect url is returned from getRedirectUrl', function() {
      expect(FamilySearch.getRedirectUrl({person: 'PPPP-PPP'})                                       )
        .toBe('https://sandbox.familysearch.org/platform/redirect?person=PPPP-PPP&access_token=mock');
    });

  });
});