import { fetchCapabilities } from "@/lib/wfs-service"
import axios from "axios"

// Mock axios
jest.mock("axios")
const mockedAxios = axios as jest.Mocked<typeof axios>

describe("WFS Service", () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it("fetches capabilities from a WFS service", async () => {
    // Mock response data
    const mockResponse = {
      data: `
        <wfs:WFS_Capabilities version="2.0.0">
          <FeatureTypeList>
            <FeatureType>
              <Name>example:layer</Name>
              <Title>Example Layer</Title>
              <DefaultSRS>EPSG:4326</DefaultSRS>
            </FeatureType>
          </FeatureTypeList>
        </wfs:WFS_Capabilities>
      `,
    }

    mockedAxios.get.mockResolvedValueOnce(mockResponse)

    const result = await fetchCapabilities("https://example.com/wfs")

    expect(mockedAxios.get).toHaveBeenCalledWith(
      "https://example.com/wfs",
      expect.objectContaining({
        params: expect.objectContaining({
          service: "WFS",
          request: "GetCapabilities",
        }),
      }),
    )

    expect(result).toHaveProperty("featureTypes")
    expect(result.featureTypes.length).toBeGreaterThan(0)
  })
})
