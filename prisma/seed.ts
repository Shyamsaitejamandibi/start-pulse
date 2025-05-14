import {
  PrismaClient,
  ServiceStatus,
  IncidentStatus,
  IncidentImpact,
  MaintenanceStatus,
} from "../lib/generated/prisma";

const prisma = new PrismaClient();

async function main() {
  // Create service groups
  const infrastructureGroup = await prisma.serviceGroup.create({
    data: {
      name: "Infrastructure",
      description: "Core infrastructure services",
    },
  });

  const applicationGroup = await prisma.serviceGroup.create({
    data: {
      name: "Applications",
      description: "Business applications and services",
    },
  });

  // Create services
  const services = await Promise.all([
    prisma.service.create({
      data: {
        name: "Database Cluster",
        description: "Main database cluster",
        status: ServiceStatus.operational,
        groupId: infrastructureGroup.id,
      },
    }),
    prisma.service.create({
      data: {
        name: "API Gateway",
        description: "API Gateway service",
        status: ServiceStatus.operational,
        groupId: infrastructureGroup.id,
      },
    }),
    prisma.service.create({
      data: {
        name: "Authentication Service",
        description: "User authentication and authorization",
        status: ServiceStatus.operational,
        groupId: applicationGroup.id,
      },
    }),
    prisma.service.create({
      data: {
        name: "File Storage",
        description: "File storage and management service",
        status: ServiceStatus.degraded,
        groupId: applicationGroup.id,
      },
    }),
  ]);

  // Create an incident
  await prisma.incident.create({
    data: {
      title: "Database Performance Issues",
      description: "Experiencing slow query response times",
      status: IncidentStatus.investigating,
      impact: IncidentImpact.major,
      affectedServices: {
        connect: [{ id: services[0].id }],
      },
      updates: {
        create: {
          message: "Investigating increased latency in database queries",
          status: IncidentStatus.investigating,
          createdBy: "System",
        },
      },
    },
  });

  // Create a maintenance
  await prisma.maintenance.create({
    data: {
      title: "Scheduled Database Maintenance",
      description: "Regular database optimization and cleanup",
      status: MaintenanceStatus.scheduled,
      startTime: new Date(Date.now() + 24 * 60 * 60 * 1000), // Tomorrow
      endTime: new Date(Date.now() + 26 * 60 * 60 * 1000), // 26 hours from now
      affectedServices: {
        connect: [{ id: services[0].id }],
      },
      updates: {
        create: {
          message: "Maintenance window scheduled",
          status: MaintenanceStatus.scheduled,
          createdBy: "System",
        },
      },
    },
  });

  console.log("Database has been seeded. 🌱");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
