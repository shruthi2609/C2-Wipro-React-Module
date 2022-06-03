describe("network call -test",()=>{
    it("test simple nw call",()=>{
        cy.request("https://jsonplaceholder.typicode.com/users").should(
            (res)=>{
                expect(res).to.have.property("body")
                expect(res).to.have.property("requestHeaders")
                expect(res.body).to.have.length(10)
                expect(res.status).to.eq(200)
            }
            )
    })
})