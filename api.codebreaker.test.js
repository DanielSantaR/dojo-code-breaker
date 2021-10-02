const request = require("supertest");
const api = require("./app.js"); // Arrange

describe("testing endpoint guess works", () => {
  test("it should return status code 200", (done) => {
    request(api)
      .get("/ultrasecret/admin") // Act
      .then((response) => {
        expect(response.statusCode).toBe(200); //Assert
        done();
      });
  });
  test("it should return status code 400", (done) => {
    request(api)
      .get("/") // Act
      .then((response) => {
        expect(response.statusCode).toBe(400); //Assert
        done();
      });
  });
  test("it should return status code 200", (done) => {
    request(api)
      .get("/?guess=20") // Act
      .then((response) => {
        expect(response.statusCode).toBe(200); //Assert
        done();
      });
  });
  test("it should return application/json content.type in success", (done) => {
    request(api)
      .get("/?guess=20") // Act
      .then((response) => {
        expect(response.type).toBe("application/json");
        done();
      });
  });
  test("it should return application/json content.type in failed", (done) => {
    request(api)
      .get("/") // Act
      .then((response) => {
        expect(response.type).toBe("application/json");
        done();
      });
  });
  test("it should return application/json content.type in failed", (done) => {
    request(api)
      .get("/") // Act
      .then((response) => {
        expect(response.body.message).toEqual("Please send guess param");
        done();
      });
  });
});

describe("testing endpoint ultrasecret works", () => {
  test("it should return status code 204", (done) => {
    request(api)
      .patch("/ultrasecret") // Act
      .then((response) => {
        expect(response.statusCode).toBe(204); //Assert
        done();
      });
  });

});
