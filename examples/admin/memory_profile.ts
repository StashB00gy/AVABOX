import { Admin } from '../../src/Admin'
import { Config } from '../../src/interfaces/config_interface'

const main = async (): Promise<any> => {
  const config: Config = {
    fullNodeHost: 'ip.of.full.node',
    fullNodePort: 9650,
    fullNodeProtocol: 'http',
    networkId: 12345

  }
  const admin: Admin = new Admin(config)
  const memory_profiler: boolean = await admin.memoryProfile("ava-memory-profile-logs")
  console.log(memory_profiler)
}

main()
