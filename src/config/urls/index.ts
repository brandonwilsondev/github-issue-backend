
import {
    ConfigModule
} from '@nestjs/config';

ConfigModule.forRoot()

const githubBaseUrl = process.env.GITHUB_BASE_URL

export {
    githubBaseUrl
}