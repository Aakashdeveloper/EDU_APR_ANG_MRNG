describe('my first test', () => {
    let out;

    beforeEach(() => {
        out = {};
    });
    it('should be true if out is true', () => {
        // arrange
        out.a = false;

        // act
        out.a = true;

        // assert
        expect(out.a).toBe(true);
    });

});

