FROM node:20-bookworm-slim

WORKDIR /app

# Install OpenSSL required by Prisma's Linux query engine.
RUN apt-get update \
    && apt-get install -y --no-install-recommends openssl ca-certificates \
    && rm -rf /var/lib/apt/lists/*

# Install dependencies and generate Prisma Client inside this
# Debian-based build environment.
COPY package*.json ./
COPY prisma ./prisma

RUN npm ci \
    && npm run db:generate \
    && npm prune --omit=dev

# Copy application source.
COPY src ./src

ENV NODE_ENV=production

EXPOSE 4000

CMD ["npm", "start"]
