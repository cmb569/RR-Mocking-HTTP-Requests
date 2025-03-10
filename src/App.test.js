
test("receives GitHub name from GitHub REST API using jest fetch mock", async () => {
    fetch.mockResponseOnce(JSON.stringify({name: 'Catalina Barriga'}))
    render(<App />)
    const gitHubName = await waitFor(() => screen.getByRole('heading', { level: 2 }))
    expect(gitHubName).toHaveTextContent('Catalina Barriga')
  })

  beforeEach(() => {
    // sets everything back to initial state before each test
    fetch.resetMocks();
  })

