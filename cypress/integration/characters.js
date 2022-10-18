describe("Movies TestCases", ()=> {

    const baseUrl = 'https://thronesapi.com/api/v2/Characters';
    let character = {};

    it('Add new Character with valid data', () => {
        cy.fixture("characters.json").then((payload) => {
            console.log({payload})
            cy.request({
                method: 'POST',
                url: baseUrl,
                body: {
                    "firstName": payload.validCharacterPayload.firstName,
                    "lastName": payload.validCharacterPayload.lastName,
                    "fullName": payload.validCharacterPayload.fullName,
                    "family": payload.validCharacterPayload.family,
                    "title": payload.validCharacterPayload.title,
                }
            }).then((res) => {
                expect(res.status).to.eq(200);
            })
        })
    })

    it('Get all characters list', () => {
        cy.fixture("characters.json").then((payload) => {
            cy.request({
                method: 'GET',
                url: (baseUrl),
            }).then((res) => {
                expect(res.status).to.eq(200);
                console.log({characters: res.body})
                character = res.body[0];
                console.log({character})
            })
        })
    });


    it('Get specific character by ID', () => {
        cy.request({
            method:'GET',
            url:(`${baseUrl}/${character.id}`),
        }).then((res)=>{
            expect(res.status).to.eq(200);
            expect(res.body.family).to.eq(character.family);
        })
    })
});