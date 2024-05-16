describe("Portfolio component", () => {
	const projects = [
		{
			name: "Project 1",
			demo: "https://example.com/project1",
			github: "https://github.com/user/project1",
			img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQE...",
		},
		{
			name: "Project 2",
			demo: "https://example.com/project2",
			github: "https://github.com/user/project2",
			img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQE...",
		},
	];

  it("should send a request to the API on page load", () => {
    cy.visit("/");
    cy.intercept("GET", "**/api/projects").as("getProjects");
    cy.visit("/portfolio");
    cy.wait("@getProjects").then((interception) => {
      expect(interception.request.url).to.include("/api/projects");
    });
  });

  it("should display loading spinner while fetching data", () => {
    cy.visit("/");
    cy.intercept("GET", "**/api/projects").as("getProjects");
    cy.visit("/portfolio");
    cy.get('[data-testid="loading-spinner"]').should("exist");
    cy.wait("@getProjects");
  });

  it("should display portfolio projects when data is fetched", () => {
    cy.intercept("GET", "**/api/projects", {
      statusCode: 200,
      body: projects,
    }).as("getProjects");

    cy.visit("/portfolio");
    cy.wait("@getProjects").then(({ request, response }) => {
      expect(response.statusCode).to.eq(200);

      cy.get('[data-testid="portfolio-block-title"]').should("have.length", 2);
    });
  });

	it('should contain source code link in portfolio blocks', () => {
		cy.intercept('GET', '**/api/projects', {
			statusCode: 200,
			body: projects
		}).as('getProjects');
	
		cy.visit('/portfolio');
		cy.wait('@getProjects');
	
		cy.get('[data-testid="portfolio-block"]').each((portfolioBlock, index) => {
			const githubLink = projects[index].github;
			cy.wrap(portfolioBlock).should('contain', 'Source Code').within(() => {
				cy.get(':nth-child(2) > a').should('have.attr', 'href', githubLink);
			});
		});
	});
});
