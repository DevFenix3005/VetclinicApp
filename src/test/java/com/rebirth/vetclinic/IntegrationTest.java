package com.rebirth.vetclinic;

import com.rebirth.vetclinic.config.AsyncSyncConfiguration;
import com.rebirth.vetclinic.config.EmbeddedKafka;
import com.rebirth.vetclinic.config.EmbeddedMongo;
import com.rebirth.vetclinic.config.JacksonConfiguration;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;
import org.springframework.boot.test.context.SpringBootTest;

/**
 * Base composite annotation for integration tests.
 */
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@SpringBootTest(classes = { VetclinicApp.class, JacksonConfiguration.class, AsyncSyncConfiguration.class })
@EmbeddedMongo
@EmbeddedKafka
public @interface IntegrationTest {
}
