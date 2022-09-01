import { createLogger, transports, format } from "winston";
export const logger = createLogger({
  transports: [
    new transports.Console({
      handleExceptions: true,

      format: format.combine(
        format.label({ label: 'Winston Error Handler...' }),
        format.timestamp(), format.prettyPrint()
      )
    })
  ],
  exitOnError: false
});
